### 新浪微博中 单击首页 tabBarItem 会执行刷新操作
###### 1. 只有在当前显示页是首页时,再次点击首页 tabBarItem 才会执行刷新
###### 2. UITabBarControllerDelegate 中的代理方法 `- (BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController;`
* 询问代理是否将选择的 view controller 设置成活跃状态即显示选择的 viewController
* 如果选中视图控制器的 tab 切换 tab 界面返回 YES,或者返回 NO 依然保持在当前 tab 页面
###### 3. 在自定义 UITabBarController 的子类中,设置代理并实现代理方法,具体代码如下
```   
- (BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController {
    // 确保当前显示的是首页界面,本例中首页是第一个 tabBar
    if ([tabBarController.selectedViewController isEqual:[tabBarController.viewControllers firstObject]]) {
        // 再次选中的 tab 页面是之前上一次选中的控制器页面
        if ([viewController isEqual:tabBarController.selectedViewController]) {
            // 发送通知,让首页刷新数据
            Post_Notification_DidClickHomePageTabBar;
            return NO;
        }
        
    }
    return YES;
}
```  

###### 4. 首页监听通知执行刷新操作
tableView 头部下拉,是通过 [- setContentOffset:animated:](https://developer.apple.com/reference/uikit/uiscrollview/1619400-setcontentoffset?language=objc) 方法实现,所以会滚动到顶部,若希望自定义滚动到顶部请参见 [UIScrollView ,UITableView 和 UICollectionView 如何滚动到顶部或底部](http://www.jianshu.com/p/79e3f4fe613b)
```
// 使用 MJRefresh ,调用下拉刷新方法              
[self.tableView.mj_header beginRefreshing];
```

### 给项目添加一个双击首页 tabBar 按钮，实现界面刷新的功能,可以在上面的单击事件的基础上结合两次单击之间的时间间隔来模拟双击
要求: 在首页即第 1 个 tabBarItem 即首页,双击首页 tabBarItem ,让页面滚动到最上方并刷新数据
 1. 定义一个全局 NSDate 类型变量保存上一次点击 tabBarItem 的时间
 2. 每一次点击 首页 tabBarItem 时,获取当前点击时间与上一次点击时间对比,若两次点击时间间隔小于 **0.5秒** 即可视为一次双击
 3. 为了区分连续多次点击,每完成一次双击后,就要将上一次的点击时间置为距离现在超出 **0.5秒** 的过去
 4. 用来模拟双击用以区分两次单击之间时间间隔的 **0.5秒** ,可以自定义
 5. 在 tabBarController 中通过子控制器数组可以获取到首页控制器,首页控制器抛出一个公有的刷新方法,在 tabBarController 中调用即可
 6. 本例中 tabBarController 的 子控制器最外层都套着一个 NavigationController,取出 navigationController 栈底控制器即为 首页控制器  
 
```
@property (nonatomic, strong) NSDate *lastSelectedDate;

- (BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController {
    
    // 确保当前在首页界面
    if ([tabBarController.selectedViewController isEqual:[tabBarController.viewControllers firstObject]]) {
        // ! 即将选中的页面是之前上一次选中的控制器页面
        if (![viewController isEqual:tabBarController.selectedViewController]) {
            return YES;
        }
        
        // 获取当前点击时间
        NSDate *currentDate = [NSDate date];
        CGFloat timeInterval = currentDate.timeIntervalSince1970 - _lastSelectedDate.timeIntervalSince1970;
        
        // 两次点击时间间隔少于 0.5S 视为一次双击
        if (timeInterval < 0.5) {
            // 通知首页刷新数据
            GWNavigationController *nav = (GWNavigationController *)viewController;
            if (nav.viewControllers.count == 0) return NO;
            // 取 navgationController 中栈底控制器
            GWHomePageViewController *homeVC = nav.viewControllers.firstObject;
            [homeVC scroll2TopRefresh];
            
            // 双击之后将上次选中时间置为1970年0点0时0分0秒,用以避免连续三次或多次点击
            _lastSelectedDate = [NSDate dateWithTimeIntervalSince1970:0];
            return NO;
        }
        // 若是单击将当前点击时间复制给上一次单击时间
        _lastSelectedDate = currentDate;
        
    }

    return YES;
}

```


# UIScrollView ,UITableView 和 UICollectionView 如何滚动到视图顶部或底部
### 滚动到顶部
##### 1. UIScrollView 有一个属性 scrollsToTop 默认为 YES, 用户可以点击状态栏让 scrollView 滚动到顶部
* 当前显示的所有的 views 中,若同一显示视图中的多个 scrollView 的 scrollsToTop 为 YES ,则无效,只能有一个 scrollView 的 scrollsToTop 打开才有效  

----
##### 2. 设置 contentOffset 为 (0, 0)点
   ` [scrollView setContentOffset:CGPointMake(0, 0) animated:YES];`
----
##### 3. tableView 和 collectionView 不仅可以通过上面两种方法滚动到顶部还可以精准滚动到第1组第1行来到达顶部
* taleView
```
[tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0] atScrollPosition:UITableViewScrollPositionBottom animated:YES];
```
* collectionView
```
[collectionView scrollToItemAtIndexPath:[NSIndexPath indexPathForItem:0 inSection:0] atScrollPosition:UICollectionViewScrollPositionTop animated:YES]
    ```   
    
### 滚动到底部
###### 1.在获取不到 tableView 准确的 frame 属性和数据源的时候
```
//在viewWillAppear:方法中调用有效(tableView没有确定contentOffset之前调用才会生效)
[tableView  setContentOffset:CGPointMake(0, CGFLOAT_MAX)];
```
----
###### 2.在可以获取到 tableView 准确的 frame 和 contentSize 时
```
if (tableView.contentSize.height > tableView.frame.size.height) {
    self.view.userInteractionEnabled = NO;
    CGPoint offset = CGPointMake(0, tableView.contentSize.height - tableView.frame.size.height);
    [tableView setContentOffset:offset animated:YES];
}
```

----
###### 3.在可以获取到 tableView 数据源的情况下
```
//在可以获得tableView准确属性的任何地方都可以调用此方法将tableView滚动到底部
[tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:lastRow inSection:lastSection] atScrollPosition:UITableViewScrollPositionBottom animated:YES];
```




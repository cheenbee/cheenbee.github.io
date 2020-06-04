# UINavigationCtroller 的 viewControllers 与 topViewController 详解
#### @property(nonatomic,copy) NSArray<__kindof UIViewController *> *viewControllers; // The current view controller stack.
* 栈中的控制器数组, 入栈依次通过[viewControllers addObject:]方式加入数组, 栈底控制器为 rootViewController.
#### @property(nullable, nonatomic,readonly,strong) UIViewController *topViewController; // The top view controller on the stack.
* 栈顶控制器,即[viewControllers lastObject], 为最新推入栈的控制器


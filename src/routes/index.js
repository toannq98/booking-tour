// Layout
import { SidebarLeftLayout } from '~/components/layout'
import { AdminDefaultLayout } from '~/components/layout'

// Page
import Category from "~/pages/category";
import HomePage from "~/pages/homepage";
import TourDetail from "~/pages/tour_detail";
import SignIn from '~/pages/signin';
import Register from '~/pages/register';
import VisionAndMission from '~/pages/vision_and_mission';
import Search from '~/pages/search';
import CheckOut from '~/pages/check_out';
import Confirmation from '~/pages/confirmation';
import AccountManage from '~/pages/account_manage';
import ListTourBooked from '~/pages/list_tour_booked';
import TourBookedDetail from '~/pages/tour_booked_detail';
import ChangeAccoutInfor from '~/pages/change_account_infor';
import PageNotFound from '~/pages/page_not_found';
import Admin from '~/pages/admin';
import Dashboard from '~/pages/admin/dashboard';
import ManageUser from '~/pages/admin/manage_user';
import ManageTour from '~/pages/admin/manage_tour';
import ManageBookingRequests from '~/pages/admin/manage_booking_requests';
import ManageUserReviews from '~/pages/admin/manage_user_reviews';
import ManageCategory from '~/pages/admin/manage_category';

// Publich Routes
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/category/:cateId', component: Category, layout: SidebarLeftLayout },
    { path: '/tour-detail/:tourId', component: TourDetail },
    { path: '/sign-in', component: SignIn },
    { path: '/register', component: Register },
    { path: '/vision-and-mission', component: VisionAndMission },
    { path: '/search', component: Search },
    { path: '/check-out', component: CheckOut },
    { path: '/confirmation', component: Confirmation },
    { path: '/account-manage', component: AccountManage },
    { path: '/list-tour-booked', component: ListTourBooked },
    { path: '/tour-booked-detail/:tourBookedId', component: TourBookedDetail },
    { path: '/change-account-infor', component: ChangeAccoutInfor },
    { path: '*', component: PageNotFound },

    //Admin 
    { path: '/admin', component: Admin, layout: null },
    { path: '/admin/dashboard', component: Dashboard, layout: AdminDefaultLayout },
    { path: '/admin/manage-user', component: ManageUser, layout: AdminDefaultLayout },
    { path: '/admin/manage-tour', component: ManageTour, layout: AdminDefaultLayout },
    { path: '/admin/manage-booking-requests', component: ManageBookingRequests, layout: AdminDefaultLayout },
    { path: '/admin/manage-user-reviews', component: ManageUserReviews, layout: AdminDefaultLayout },
    { path: '/admin/manage-category', component: ManageCategory, layout: AdminDefaultLayout },
];

// Private Routes
// export const privateRoutes = [

// ];

// Admin Routes
// export const adminRoutes = [

// ];

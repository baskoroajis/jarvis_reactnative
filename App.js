import {createStackNavigator, createAppContainer} from 'react-navigation'
import SparePartListPage from './app/view/SparePartListPage'
import ProductDetailPage from './app/view/ProductDetailPage'


const RootStack = createStackNavigator({
  SparePartList : {screen: SparePartListPage,},
  ProductDetail : {screen: ProductDetailPage,},
});

const App = createAppContainer(RootStack);
export default App;

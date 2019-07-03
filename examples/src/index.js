import iActionSheet from './components/action-sheet'
import iAlert  from './components/alert'
import iAvatar from './components/avatar'
import iBadge from './components/badge'
import iButton from './components/button'
import iCard from './components/card'
import iCell from './components/cell'
import iCellGroup from './components/cell-group'
import iCheckboxGroup from './components/checkbox-group'
import iCol from './components/col'
import iCollapse from './components/collapse'
import iCollapseItem from './components/collapse-item'
import iCountDown from './components/countDown'
import iDivider from './components/divider'
import iDrawer from './components/drawer'
import iGrid from './components/grid'
import iGridIcon from './components/grid-icon'
import iGridItem from './components/grid-item'
import iGridLabel from './components/grid-label'
import iIcon from './components/icon'
import iIndexList from './components/index-list'
import iInput from './components/input'
import iInputNumber from './components/input-number'
import iLoadMore from './components/load-more'
import iMessage from './components/message'
import iModal from './components/modal'
import iNoticeBar from './components/notice-bar'
import iPage from './components/page'
import iPanel from './components/panel'
import iProgress from './components/progress'
import iRadioGroup from './components/radio-group'
import iRate from './components/rate'
import iRow from './components/row'
import iSpin from './components/spin'
import iStep from './components/step'
import iSteps from './components/steps'
import iSticky from './components/sticky'
import iStickyItem from './components/sticky-item'
import iSwipeout from './components/swipeout'
import iSwitch from './components/switch'
import iTab from './components/tab'
import iTabBar from './components/tab-bar'
import iTabBarItem from './components/tab-bar-item'
import iTabs from './components/tabs'
import iTag from './components/tag'
import iToast from './components/toast'

const components = {
  'i-action-sheet': iActionSheet,
  'i-alert': iAlert,
  'i-avatar': iAvatar,
  'i-badge': iBadge,
  'i-button': iButton,
  'i-card': iCard,
  'i-cell': iCell,
  'i-cell-group': iCellGroup,
  'i-checkbox-group': iCheckboxGroup,
  'i-col': iCol,
  'i-collapse': iCollapse,
  'i-collapse-item': iCollapseItem,
  'i-count-down': iCountDown,
  'i-divider': iDivider,
  'i-drawer': iDrawer,
  'i-grid': iGrid,
  'i-grid-icon': iGridIcon,
  'i-grid-item': iGridItem,
  'i-grid-label': iGridLabel,
  'i-icon': iIcon,
  'i-index-list': iIndexList,
  'i-input': iInput,
  'i-input-number': iInputNumber,
  'i-load-more': iLoadMore,
  'i-message': iMessage,
  'i-modal': iModal,
  'i-notice-bar': iNoticeBar,
  'i-page': iPage,
  'i-panel': iPanel,
  'i-progress': iProgress,
  'i-radio-group': iRadioGroup,
  'i-rate': iRate,
  'i-row': iRow,
  'i-spin': iSpin,
  'i-step': iStep,
  'i-steps': iSteps,
  'i-sticky': iSticky,
  'i-sticky-item': iStickyItem,
  'i-swipeout': iSwipeout,
  'i-switch': iSwitch,
  'i-tab': iTab,
  'i-tab-bar': iTabBar,
  'i-tab-bar-item': iTabBarItem,
  'i-tabs': iTabs,
  'i-tag': iTag,
  'i-toast': iToast
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$IVIEW = {
    size: opts.size || '',
    transfer: 'transfer' in opts ? opts.transfer : ''
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: '1.0.4',
  install,
  ...components
}

export default API
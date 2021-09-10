import Vue from 'vue';
import ServerList from '@/components/ServerList/ServerList.vue';
import ServerButton from '@/components/ServerList/ServerButton.vue';
import ServerName from '@/components/ServerName/ServerName.vue';
import ExpandIcon from 'vue-material-design-icons/ChevronDown.vue';
import ChannelList from '@/components/ChannelList/ChannelList.vue';
import UserInfo from '@/components/UserInfo/UserInfo.vue';
import ChannelInfo from '@/components/ChannelInfo/ChannelInfo.vue';
import ChannelData from '@/components/ChannelData/ChannelData.vue';
import UserList from '@/components/UserList/UserList.vue';
import BarraMensagem from '@/components/ChannelData/BarraMensagem.vue';

//server List
Vue.component('ServerList', ServerList);
Vue.component('ServerButton', ServerButton);
//-----
//server Name
Vue.component('ServerName', ServerName);
Vue.component('ExpandIcon', ExpandIcon);
//------
//Channel List
Vue.component('ChannelList', ChannelList);
//------
//ChannelInfo
Vue.component('ChannelInfo', ChannelInfo);
//------
//ChannelData
Vue.component('ChannelData', ChannelData);
Vue.component('BarraMensagem', BarraMensagem);
//------
//UserInfo
Vue.component('UserInfo', UserInfo);
//------
//UserList
Vue.component('UserList', UserList);
//------

<template>
  <div
    id="inspire"
    min-height="100"
  >
    <system-bar />
    <sidebar-left />
    <chat-frame />
    <sidebar-right />
  </div>
</template>

<script>
  import SystemBar from '@/components/SystemBar'
  import SidebarLeft from '@/components/SidebarLeft'
  import ChatFrame from '@/components/ChatFrame'
  import SidebarRight from '@/components/SidebarRight'

  export default {
    name: 'MainFrame',
    components: {
      SystemBar,
      SidebarLeft,
      ChatFrame,
      SidebarRight,
    }
  }
</script>

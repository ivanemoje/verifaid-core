export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Ben Data',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Beneficiary Data',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Search Beneficiary',
      url: '/base/searchben',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'CRNs',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Create CRNs',
          url: '/base/crnform',
          icon: 'icon-puzzle',
        },
        {
          name: 'CRN List',
          url: '/base/crnlist',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Payment Req/Memo',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Create Memo',
          url: '/base/memoform',
          icon: 'icon-cursor',
        },
        {
          name: 'Create Payment Req',
          url: '/base/reqform',
          icon: 'icon-cursor',
        },
        {
          name: 'Memo List',
          url: '/base/memolist',
          icon: 'icon-cursor',
        },
        {
          name: 'Payment Req List',
          url: '/base/reqlist',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Letter of Auth',
      url: '/charts',
      icon: 'icon-pie-chart',
      attributes: { disabled: true },
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Reconciliation',
    },
    {
      name: 'File Management',
      url: '/pages',
      icon: 'icon-briefcase',
      children: [
        {
          name: 'CRNS',
          url: '/theme/colors',
          icon: 'icon-graph',
        },
        {
          name: 'Bank Upload Reports',
          url: '/theme/colors',
          icon: 'fa-file-o',
        },
        {
          name: 'Equity Txn Reports',
          url: '/theme/colors',
          icon: 'icon-globe',
        },
        {
          name: 'Bank Dist Reports',
          url: '/theme/colors',
          icon: 'fa-television',
        },
        {
          name: 'GDT Dist Reports',
          url: '/theme/colors',
          icon: 'icon-layers',
        },
        
      ],
    },
    {
      name: 'Query Outputs',
      url: '/base/searchben',
      icon: 'icon-pencil',
    },
    {
      name: 'AMEL',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'ProMIS',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    
  ],
};

const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: i18n.t('views.guide.hamburgerContainer.title'),
      description: i18n.t('views.guide.hamburgerContainer.description'),
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: i18n.t('views.guide.breadcrumbContainer.title'),
      description: i18n.t('views.guide.breadcrumbContainer.description'),
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: i18n.t('views.guide.headerSearch.title'),
      description: i18n.t('views.guide.headerSearch.description'),
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: i18n.t('views.guide.fullScreen.title'),
      description: i18n.t('views.guide.fullScreen.description'),
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: i18n.t('views.guide.sizeSelect.title'),
      description: i18n.t('views.guide.sizeSelect.description'),
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: i18n.t('views.guide.tagsViewContainer.title'),
      description: i18n.t('views.guide.tagsViewContainer.description'),
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps

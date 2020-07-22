
/**
 * 默认属性
 */
export const defaultProps = {
    isPopup: true,
    isOpen: false,
    theme: 'default',
    value: jalaali.toJalaali(new Date()),
    min: {jy:1300,jm:1,jd:1},
    max: {jy:jalaali.toJalaali(new Date()).jy,jm:12,jd:31},
    showFooter: true,
    showHeader: true,
    showCaption: false,
    dateConfig: {
        'year': {
            format: 'YYYY',
            caption: 'Year',
            step: 1,
        },
        'month': {
            format: 'M',
            caption: 'Mon',
            step: 1,
        },
        'date': {
            format: 'D',
            caption: 'Day',
            step: 1,
        },
    },
    headerFormat: 'YYYY/MM/DD',
    confirmText: '完成',
    cancelText: '取消',
    onChange: () => {},
    onSelect: () => {},
    onCancel: () => {},
};

/**
 * 日期配置
 */
export const dateConfigMap = {
    'year': {
        format: 'YYYY',
        caption: 'Year',
        step: 1,
    },
    'month': {
        format: 'M',
        caption: 'Mon',
        step: 1,
    },
    'date': {
        format: 'D',
        caption: 'Day',
        step: 1,
    },
    'hour': {
        format: 'hh',
        caption: 'Hour',
        step: 1,
    },
    'minute': {
        format: 'mm',
        caption: 'Min',
        step: 1,
    },
    'second': {
        format: 'hh',
        caption: 'Sec',
        step: 1,
    },
};




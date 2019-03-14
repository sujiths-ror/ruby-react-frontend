import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'html': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'fontFamily': 'Muli, Helvetica, Arial, sans-serif'
  },
  'a': {
    'color': '#fdcc52',
    'WebkitTransition': 'all .35s',
    'transition': 'all .35s'
  },
  'a:focus': {
    'color': '#fcbd20'
  },
  'a:hover': {
    'color': '#fcbd20'
  },
  'hr': {
    'maxWidth': [{ 'unit': 'px', 'value': 100 }],
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderWidth': '1px',
    'borderColor': 'rgba(34, 34, 34, .1)'
  },
  'hrlight': {
    'borderColor': '#fff'
  },
  'h1': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h2': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h3': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h4': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h5': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h6': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'p': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'section': {
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }]
  },
  'section h2': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }]
  },
  '#mainNav': {
    'borderColor': 'rgba(34, 34, 34, .05)',
    'backgroundColor': '#fff',
    'WebkitTransition': 'all .35s',
    'transition': 'all .35s',
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    '>w992': {
      'borderColor': 'transparent',
      'backgroundColor': 'transparent'
    }
  },
  '#mainNav navbar-brand': {
    'color': '#fdcc52',
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  '#mainNav navbar-brand:focus': {
    'color': '#fcbd20'
  },
  '#mainNav navbar-brand:hover': {
    'color': '#fcbd20'
  },
  '#mainNav navbar-toggler': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'color': '#222'
  },
  '#mainNav navbar-nav>li>a': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontFamily': 'Lato, Helvetica, Arial, sans-serif',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'textTransform': 'uppercase'
  },
  '#mainNav navbar-nav>li>aactive': {
    // color: #fdcc52!important;
        background-color: transparent
    'color': '#fff!important',
    'background': 'rgba(255,57,64,1) !important',
    'background': '-moz-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%) !important',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,57,64,1)), color-stop(100%, rgba(239,1,124,1))) !important',
    'background': '-webkit-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%) !important',
    'background': '-o-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%) !important',
    'background': '-ms-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%) !important',
    'background': 'linear-gradient(to bottom, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%) !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  '#mainNav navbar-nav>li>aactive:hover': {
    'backgroundColor': 'transparent'
  },
  '#mainNav navbar-nav>li>a': {
    'color': '#222'
  },
  '#mainNav navbar-nav>li>a:focus': {
    'color': '#222'
  },
  '#mainNav navbar-nav>li>a:focus:hover': {
    'color': '#fdcc52'
  },
  '#mainNav navbar-nav>li>a:hover': {
    'color': '#fdcc52'
  },
  'headermasthead': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 150 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 100 }],
    'color': '#fff',
    'backgroundImage': 'url(/images/banner_bg.png)',
    'backgroundSize': '100%',
    '>w992': {
      'height': [{ 'unit': 'vh', 'value': 100 }],
      'minHeight': [{ 'unit': 'px', 'value': 775 }],
      'paddingTop': [{ 'unit': 'px', 'value': 0 }],
      'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'headermasthead header-content': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'marginBottom': [{ 'unit': 'px', 'value': 100 }],
    'textAlign': 'center',
    '>w320&&<w767': {
      'marginBottom': [{ 'unit': 'px', 'value': 50 }]
    }
  },
  'headermasthead header-content h1': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#333'
  },
  'headermasthead device-container': {
    'maxWidth': [{ 'unit': 'px', 'value': 530 }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'headermasthead device-container screen img': {
    'borderRadius': '3px'
  },
  'sectiondownload': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }]
  },
  'big-head': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }]
  },
  'sectiondownload h2': {
    // font-size: 50px;
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': '900',
    'textTransform': 'uppercase',
    'color': '#cbd9e8',
    '>w768': {
      'fontSize': [{ 'unit': 'px', 'value': 70 }]
    }
  },
  'sectiondownload badges badge-link': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    '>w768': {
      'display': 'inline-block',
      'marginBottom': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'sectiondownload badges badge-link:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'sectiondownload badges badge-link img': {
    'height': [{ 'unit': 'px', 'value': 60 }]
  },
  'sectionfeatures section-heading': {
    'marginBottom': [{ 'unit': 'px', 'value': 100 }]
  },
  'sectionfeatures section-heading h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'sectionfeatures section-heading p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'sectionfeatures device-container': {
    'maxWidth': [{ 'unit': 'px', 'value': 525 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    '>w992': {
      'marginBottom': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'sectionfeatures feature-item': {
    'maxWidth': [{ 'unit': 'px', 'value': 525 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    '>w992': {
      'marginBottom': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'sectionfeatures device-container': {
    'marginBottom': [{ 'unit': 'px', 'value': 100 }]
  },
  'sectionfeatures feature-item': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }],
    'textAlign': 'center'
  },
  'sectionfeatures feature-item h3': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'sectionfeatures feature-item i': {
    'fontSize': [{ 'unit': 'px', 'value': 80 }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'background': '-webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430))',
    'background': 'linear-gradient(to left, #7b4397, #dc2430)',
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  },
  'sectioncta': {
    'position': 'relative',
    'backgroundColor': '#edf1f4',
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }],
    'backgroundImage': 'url(/images/testimonial_bg.png)',
    'backgroundPosition': 'center',
    'backgroundSize': 'cover'
  },
  'sectioncta cta-content': {
    'position': 'relative',
    'zIndex': '1'
  },
  'sectioncta cta-content h2': {
    // font-size: 50px;
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': '900',
    'textTransform': 'uppercase',
    'color': '#cbd9e8',
    '>w768': {
      'fontSize': [{ 'unit': 'px', 'value': 80 }]
    }
  },
  'sectioncta overlay': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': 'rgba(0, 0, 0, .5)'
  },
  'sectioncontact': {
    'textAlign': 'center'
  },
  'sectioncontact h2': {
    // font-size: 50px;
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': '900',
    'textTransform': 'uppercase',
    'color': '#cbd9e8'
  },
  'sectioncontact h2 i': {
    'color': '#dd4b39'
  },
  'sectioncontact ullist-social': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'sectioncontact ullist-social li a': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'color': '#fff',
    'borderRadius': '100%'
  },
  'sectioncontact ullist-social lisocial-twitter a': {
    'backgroundColor': '#1da1f2'
  },
  'sectioncontact ullist-social lisocial-twitter a:hover': {
    'backgroundColor': '#0d95e8'
  },
  'sectioncontact ullist-social lisocial-facebook a': {
    'backgroundColor': '#3b5998'
  },
  'sectioncontact ullist-social lisocial-facebook a:hover': {
    'backgroundColor': '#344e86'
  },
  'sectioncontact ullist-social lisocial-google-plus a': {
    'backgroundColor': '#dd4b39'
  },
  'sectioncontact ullist-social lisocial-google-plus a:hover': {
    'backgroundColor': '#d73925'
  },
  'footer': {
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'color': 'rgba(255, 255, 255, .3)',
    'backgroundColor': '#222'
  },
  'footer p': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer ul li a': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'rgba(255, 255, 255, .3)'
  },
  'footer ul li aactive': {
    'textDecoration': 'none'
  },
  'footer ul li a:active': {
    'textDecoration': 'none'
  },
  'footer ul li a:focus': {
    'textDecoration': 'none'
  },
  'footer ul li a:hover': {
    'textDecoration': 'none'
  },
  'bg-primary': {
    'background': '#ff393e',
    'background': '-webkit-gradient(linear, left top, left bottom, from(#ff393e), to(#f10776))',
    'background': 'linear-gradient(#ff393e, #f10776)'
  },
  'text-primary': {
    'color': '#fdcc52'
  },
  'no-gutter>[class*=col-]': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-outline': {
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }],
    'borderColor': '#fff'
  },
  'btn-outlineactive': {
    'color': '#fff',
    'borderColor': '#fdcc52',
    'backgroundColor': '#fdcc52'
  },
  'btn-outline:active': {
    'color': '#fff',
    'borderColor': '#fdcc52',
    'backgroundColor': '#fdcc52'
  },
  'btn-outline:focus': {
    'color': '#fff',
    'borderColor': '#fdcc52',
    'backgroundColor': '#fdcc52'
  },
  'btn-outline:hover': {
    'color': '#fff',
    'borderColor': '#fdcc52',
    'backgroundColor': '#fdcc52'
  },
  'btn': {
    'borderRadius': '300px',
    'fontFamily': 'Lato, Helvetica, Arial, sans-serif',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'textTransform': 'uppercase'
  },
  'btn-xl': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 45 }]
  },
  // ***************************************************************
  'login_btn': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#333' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 29 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 29 }],
    'borderRadius': '4px',
    'color': '#333 !important',
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }]
  },
  'banner_h': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-primary-gradiant': {
    'color': '#fff',
    'background': 'rgba(255,57,64,1)',
    'background': '-moz-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,57,64,1)), color-stop(100%, rgba(239,1,124,1)))',
    'background': '-webkit-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-o-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-ms-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': 'linear-gradient(to bottom, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)'
  },
  'btn-primary-gradiant:hover': {
    'color': '#fff',
    'background': 'rgba(255,57,64,1)',
    'background': '-moz-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,57,64,1)), color-stop(100%, rgba(239,1,124,1)))',
    'background': '-webkit-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-o-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-ms-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': 'linear-gradient(to bottom, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .5)' }]
  },
  'btn-primary-gradiant:focus': {
    'color': '#fff',
    'background': 'rgba(255,57,64,1)',
    'background': '-moz-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,57,64,1)), color-stop(100%, rgba(239,1,124,1)))',
    'background': '-webkit-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-o-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-ms-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': 'linear-gradient(to bottom, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .5)' }]
  },
  'btn-primary-gradiant:active': {
    'color': '#fff',
    'background': 'rgba(255,57,64,1)',
    'background': '-moz-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,57,64,1)), color-stop(100%, rgba(239,1,124,1)))',
    'background': '-webkit-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-o-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': '-ms-linear-gradient(top, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'background': 'linear-gradient(to bottom, rgba(255,57,64,1) 0%, rgba(239,1,124,1) 100%)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .5)' }]
  },
  'btn-info-gradiant': {
    'color': '#fff',
    'background': 'rgb(85, 75, 185)',
    'background': '-moz-linear-gradient(top, rgba(85, 75, 185) 0%, rgba(66, 56, 165) 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(85, 75, 185)), color-stop(100%, rgba(66, 56, 165)))',
    'background': '-webkit-linear-gradient(top, rgb(85, 75, 185) 0%, rgb(66, 56, 165) 100%)',
    'background': '-o-linear-gradient(top, rgba(85, 75, 185) 0%, rgba(66, 56, 165) 100%)',
    'background': '-ms-linear-gradient(top, rgba(85, 75, 185) 0%, rgba(66, 56, 165) 100%)',
    'background': 'linear-gradient(to bottom, rgb(85, 75, 185) 0%, rgb(66, 56, 165) 100%)'
  },
  'section-para': {
    'color': '#8294a9'
  },
  'w-100': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w-50': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'left': {
    'float': 'left'
  },
  'right': {
    'float': 'right'
  },
  'mgn-0px': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'pad-0px': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mgn-t-20px': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'mgn-t-10px': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'mgn-b-20px': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'mgn-b-10px': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'mgn-b-0px': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'input-group-search input': {
    'borderRight': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'input-group-search input:focus': {
    'borderColor': '#cbd9e8',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'input-group-search span': {
  },
  'input-group-search span button': {
    'color': '#ced4da !important',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'background': 'transparent !important',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderBottomLeftRadius': '0px !important',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderTopLeftRadius': '0px !important',
    'backgroundColor': 'white',
    'borderTopRightRadius': '4px !important',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderBottomRightRadius': '0px !important'
  },
  'input-group-search span button:focus': {
    'borderColor': '#cbd9e8',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'input-group-search span button i': {
  },
  'btn-group-custm': {
  },
  'btn-group-custm button': {
    'background': 'transparent !important',
    'color': '#7d7d7d'
  },
  'btn-group-custm button:focus': {
    'borderColor': 'transparent !important',
    'outline': 'none !important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-group-custm button span': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'btn-group-custm ul': {
  },
  'btn-group-custm ul li': {
  },
  'btn-group-custm ul li a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-group-custm ul li a:hover': {
    'color': '#f92554'
  },
  'box-grid': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'background': '#fff',
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderRadius': '0px'
  },
  'box-grid:first-child': {
    'borderTopLeftRadius': '10px',
    'borderTopRightRadius': '10px',
    'borderBottomLeftRadius': '0px',
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderBottomRightRadius': '0px'
  },
  'box-grid:last-child': {
    'borderBottomLeftRadius': '10px',
    'borderBottomRightRadius': '10px',
    'borderTopLeftRadius': '0px',
    'borderTopRightRadius': '0px'
  },
  'box-thumb-img': {
    'width': [{ 'unit': 'px', 'value': 110 }],
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 110 }]
  },
  'box-thumb-img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '4px'
  },
  'box-titles': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'left'
  },
  'btn-actions': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '50px',
    'float': 'right'
  },
  'btn-actions:focus': {
    'borderColor': 'transparent !important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'outline': 'none'
  },
  'actions_btn': {
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': 8 }],
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  'big-text': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': '#7e98b3'
  },
  'footer-img': {
  },
  'sectionfeatures': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'social_media': {
    'marginTop': [{ 'unit': 'px', 'value': 28 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'social_media h3': {
  },
  'social_media ul': {
  },
  'social_media ul li': {
  },
  'social_media ul li a': {
  },
  'social_media ul li a img': {
  },
  'btn-dwnl': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }],
    'color': '#fc2f49',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'margin': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 32 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block'
  },
  'btn-dwnl i': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'sponsers_img': {
  },
  'sponsers_img img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // ******************************************
  'testimonial': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 30 }],
    'only screen&&<w479': {
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'testimonial pic': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '58px',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'overflow': 'hidden'
  },
  'testimonial pic img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'testimonial description': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '200',
    'color': '#7e98b3',
    'lineHeight': [{ 'unit': 'px', 'value': 23 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'testimonial title': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '600',
    'color': '#000',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'textTransform': 'uppercase'
  },
  'testimonial post': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'color': '#7e98b3',
    'textTransform': 'capitalize'
  },
  'owl-theme owl-controls': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'owl-theme owl-controls owl-page span': {
    'width': [{ 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 15 }],
    'borderRadius': '50%',
    'background': '#fc304a',
    'opacity': '0.2',
    // box-shadow: 0 0 8px rgba(0, 0, 0, 0.45);
    'transition': 'all 0.3s ease 0s'
  },
  'owl-theme owl-controls owl-pageactive span': {
    'background': '#fc304a'
  },
  // ****************************************************************************************
  // header.signup_page {
    position: relative;
    width: 100%;
    padding-top: 150px;
    padding-bottom: 100px;
    color: #fff;
    background: #f1f1f1;
    height: 100vh;
}
.signup_box {
    min-width: 300px;
    max-width: 600px;
    margin: auto;
}
.signup_box_container {
    width: 100%;
    float: left;
    padding: 50px;
    border-radius: 7px;
    display: block;
    height: auto;
    background: #fff;
    box-shadow: 0px 2px 14px 1px rgba(0,0,0,0.1);
}
.img_con {
    width: 250px;
    height: auto;
    margin: auto;
}
.img_con img{
    width: 100%;
}
.text_css
{
    margin-bottom: 15px;
}
.text_css h3
{
    color: #4238a5;
    font-weight: 600;
}
.text_css p
{
    color: #666;
}
.verifi-input{}
.verifi-input span{
    color: #333;
    padding: 12px;
    margin-right: 8px;
    border-bottom: 1px solid #ced4da;
}
.verifi-input input{
    border-top: none;
    border-right: none;
    border-left: none;
}
.verifi-input input:focus{
    border-color: none;
    box-shadow: 0 0 0 0 !important; 
}
.btn-sign_verifi
{
    width: 100%;
    border-radius: 3px;
    margin: 25px 0px;
    padding: 10px;
    font-size: 18px;

}
  // ****************************************************************************************
  // signup
  'eo-brand-link': {
    'color': '#ffffff',
    'textDecoration': 'none',
    'fontWeight': '700'
  },
  'eo-brand-link:hover': {
    'color': 'rgba(255,57,64,1)',
    'textDecoration': 'none',
    'fontWeight': '700'
  },
  'eo-nav': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 25 }],
    'position': 'relative',
    'display': 'block'
  },
  'eo-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'eo-signup-section': {
    'color': '#ffffff',
    'padding': [{ 'unit': '%V', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%V', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'eo-signup-section h3': {
    'textTransform': 'uppercase',
    'fontWeight': '800',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 48 }]
  },
  'signup-right': {
    'backgroundColor': '#ffffff',
    'color': '#000',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.05 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.05 }],
    '<w767': {
      'backgroundColor': '#ffffff',
      'color': '#000',
      'position': 'relative',
      'right': [{ 'unit': 'px', 'value': 0 }],
      'top': [{ 'unit': 'px', 'value': 0 }],
      'height': [{ 'unit': '%V', 'value': 1 }],
      'width': [{ 'unit': '%H', 'value': 1 }],
      'MsFlex': '0 0 100%',
      'flex': '0 0 100%',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }],
      'paddingRight': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'head-event-signup': {
    'color': '#000',
    'fontWeight': '700'
  },
  'signup-right eo-signup-section': {
    'paddingTop': [{ 'unit': '%V', 'value': 0.3 }]
  },
  'event-form-group': {
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'position': 'relative'
  },
  'eo-label': {
    'color': '#b5b8bb',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'form-input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'outline': 'none',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d4d1d1' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'form-input:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d4d1d1' }],
    'outline': 'none'
  },
  'text-bkl': {
    'color': '#000000',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '700'
  },
  'text-bkl label > span': {
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'display': 'inline-block',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -2 }]
  },
  'eo-forget-pswd': {
    'position': 'relative',
    'display': 'inline-block',
    'float': 'right'
  },
  'eo-forget-pswd a': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#7d7d7d',
    'fontWeight': '700'
  },
  'btn-radius': {
    'borderRadius': '5px'
  },
  'eo-center-sect': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.4 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }],
    'padding': [{ 'unit': '%V', 'value': 0.07 }, { 'unit': 'px', 'value': 15 }, { 'unit': '%V', 'value': 0.07 }, { 'unit': 'px', 'value': 15 }],
    'marginTop': [{ 'unit': '%V', 'value': 0.04 }],
    'backgroundColor': '#ffffff',
    '<w1366': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'maxWidth': [{ 'unit': '%H', 'value': 0.5 }],
      'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }],
      'padding': [{ 'unit': '%V', 'value': 0.07 }, { 'unit': 'px', 'value': 15 }, { 'unit': '%V', 'value': 0.07 }, { 'unit': 'px', 'value': 15 }],
      'marginTop': [{ 'unit': '%V', 'value': 0.04 }],
      'backgroundColor': '#ffffff'
    },
    '<w991': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'maxWidth': [{ 'unit': '%H', 'value': 0.7 }],
      'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }],
      'padding': [{ 'unit': '%V', 'value': 0.07 }, { 'unit': 'px', 'value': 15 }, { 'unit': '%V', 'value': 0.07 }, { 'unit': 'px', 'value': 15 }],
      'marginTop': [{ 'unit': '%V', 'value': 0.04 }],
      'backgroundColor': '#ffffff'
    }
  },
  'eo-signup-verify': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.65 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'position': 'relative'
  },
  'eo-img-sect': {
    'display': 'block',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'img-center': {
    'display': 'block',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'icon-img': {
    'maxWidth': [{ 'unit': 'px', 'value': 190 }]
  },
  'title-muted': {
    'fontWeight': '700',
    'color': '#646464'
  },
  'subtitle-muted': {
    'fontWeight': '500',
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }],
    'color': '#b1afaf'
  },
  'input-split': {
    'display': 'table-cell',
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }]
  },
  'form-group-eo': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'display': 'table',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'eo-input-sm': {
    'width': [{ 'unit': 'px', 'value': 80 }]
  },
  'input-control-eo': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .1)' }],
    'WebkitBoxShadow': '1px 3px 7px rgba(0, 0, 0, .1)',
    'MozBoxShadow': '1px 3px 7px rgba(0, 0, 0, .1)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }]
  },
  'input-control-eo:focus': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .2)' }],
    'WebkitBoxShadow': '1px 2px 9px rgba(0, 0, 0, .2)',
    'MozBoxShadow': '1px 2px 9px rgba(0, 0, 0, .2)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'outline': 'none'
  },
  // signup END
});

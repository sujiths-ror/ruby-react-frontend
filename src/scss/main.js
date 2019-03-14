import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'html': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'body': {
    'fontFamily': 'Muli, Helvetica, Arial, sans-serif',
    'backgroundColor': '#efefef'
  },
  'btn': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'btn-sm': {
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'a': {
    'color': '#f92554',
    'WebkitTransition': 'all .35s',
    'transition': 'all 0.35s'
  },
  'a:focus': {
    'color': '#dc2430'
  },
  'a:hover': {
    'color': '#dc2430'
  },
  'hr': {
    'maxWidth': [{ 'unit': 'px', 'value': 100 }],
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderWidth': '1px',
    'borderColor': 'rgba(34, 34, 34, 0.1)'
  },
  'hrlight': {
    'borderColor': '#fff'
  },
  'h1': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '500',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h2': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '500',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h3': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '500',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h4': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '500',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h5': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '500',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'h6': {
    'fontFamily': 'Catamaran, Helvetica, Arial, sans-serif',
    'fontWeight': '500',
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
  'section rupee': {
    'backgroundColor': '#FFC30B'
  },
  'sectioncta': {
    'position': 'relative',
    'backgroundColor': '#edf1f4',
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }],
    'backgroundImage': 'url(../images/testimonial_bg.png)',
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
    'backgroundColor': 'rgba(0, 0, 0, 0.5)'
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
    'color': 'rgba(255, 255, 255, 0.3)',
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
    'color': 'rgba(255, 255, 255, 0.3)'
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
  'no-gutter > [class*=col-]': {
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
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '4px',
    'color': '#333 !important',
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'backgroundColor': 'transparent'
  },
  'banner_h': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-primary-gradiant': {
    'color': '#fff',
    'background': '#ff3940',
    'background': '-moz-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, #ff3940), color-stop(100%, #ef017c))',
    'background': '-webkit-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-o-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-ms-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': 'linear-gradient(to bottom, #ff3940 0%, #ef017c 100%)'
  },
  'btn-primary-gradiant:hover': {
    'color': '#fff',
    'background': '#ff3940',
    'background': '-moz-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, #ff3940), color-stop(100%, #ef017c))',
    'background': '-webkit-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-o-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-ms-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': 'linear-gradient(to bottom, #ff3940 0%, #ef017c 100%)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'btn-primary-gradiant:focus': {
    'color': '#fff',
    'background': '#ff3940',
    'background': '-moz-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, #ff3940), color-stop(100%, #ef017c))',
    'background': '-webkit-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-o-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-ms-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': 'linear-gradient(to bottom, #ff3940 0%, #ef017c 100%)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'btn-primary-gradiant:active': {
    'color': '#fff',
    'background': '#ff3940',
    'background': '-moz-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, #ff3940), color-stop(100%, #ef017c))',
    'background': '-webkit-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-o-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': '-ms-linear-gradient(top, #ff3940 0%, #ef017c 100%)',
    'background': 'linear-gradient(to bottom, #ff3940 0%, #ef017c 100%)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'btn-info-gradiant': {
    'color': '#fff',
    'background': '#554bb9',
    'background': '-moz-linear-gradient(top, #554bb9 0%, #4238a5 100%)',
    'background': '-webkit-gradient(left top, left bottom, color-stop(0%, #554bb9), color-stop(100%, #4238a5))',
    'background': '-webkit-linear-gradient(top, #554bb9 0%, #4238a5 100%)',
    'background': '-o-linear-gradient(top, #554bb9 0%, #4238a5 100%)',
    'background': '-ms-linear-gradient(top, #554bb9 0%, #4238a5 100%)',
    'background': 'linear-gradient(to bottom, #554bb9 0%, #4238a5 100%)'
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
  'btn-sect': {
    'display': 'inline-block !important',
    'textAlign': 'left',
    'verticalAlign': 'middle'
  },
  'icon-eo': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'btn-drop': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'textAlign': 'left',
    'borderRadius': '5px',
    'position': 'relative'
  },
  'btn-drop::after': {
    'content': '"\f078"',
    'fontFamily': '"FontAwesome" !important',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 8 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#0f2281'
  },
  'title-breadcrumbs': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'icon-btn': {
    'fontSize': [{ 'unit': 'em', 'value': 10 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-droper': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'textAlign': 'left',
    'borderRadius': '5px',
    'position': 'relative',
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'MozBoxShadow': '1px 5px 8px rgba(0, 0, 0, 0.1)',
    'MsBoxShadow': '1px 5px 8px rgba(0, 0, 0, 0.1)',
    'WebkitBoxShadow': '1px 5px 8px rgba(0, 0, 0, 0.1)'
  },
  'btn-droper:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'MozBoxShadow': '0px 1px 2px rgba(0, 0, 0, 0.2)',
    'MsBoxShadow': '0px 1px 2px rgba(0, 0, 0, 0.2)',
    'WebkitBoxShadow': '0px 1px 2px rgba(0, 0, 0, 0.2)'
  },
  'btn-white': {
    'backgroundColor': '#ffffff',
    'color': '#000000'
  },
  'btn-white:hover': {
    'backgroundColor': '#f3f3f3',
    'color': '#000000'
  },
  'btn-white:focus': {
    'backgroundColor': '#f3f3f3',
    'color': '#000000'
  },
  'btn-white:active': {
    'backgroundColor': '#f3f3f3',
    'color': '#000000'
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
  'box-title': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase',
    'color': '#888'
  },
  'box-title > h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
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
  // ADMIN STYLE
  'eo-brand-logo': {
    'maxWidth': [{ 'unit': 'px', 'value': 210 }]
  },
  'btn-res-menu': {
    'display': 'inline-block',
    'position': 'relative',
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'backgroundColor': 'transparent',
    'transition': 'all 100ms ease-in-out',
    'WebkitTransition': 'all 100ms ease-in-out',
    'MozTransition': 'all 100ms ease-in-out',
    'MsTransition': 'all 100ms ease-in-out'
  },
  'btn-res-menu eo-sr-menu': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#a7a2b9',
    'content': '''',
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'transition': 'all 100ms ease-in-out',
    'WebkitTransition': 'all 100ms ease-in-out',
    'MozTransition': 'all 100ms ease-in-out',
    'MsTransition': 'all 100ms ease-in-out'
  },
  'btn-res-menu eo-sr-menu:last-child': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 15 }],
    'backgroundColor': '#a7a2b9',
    'content': '''',
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-res-menu:hover eo-sr-menu': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#fc304a',
    'content': '''',
    'display': 'block'
  },
  'btn-res-menu:hover eo-sr-menu:last-child': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#fc304a',
    'content': '''',
    'display': 'block'
  },
  'btn-res-menu:hover eo-sr-menu:first-child': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 15 }],
    'backgroundColor': '#fc304a',
    'content': '''',
    'display': 'block'
  },
  'eo-aside-bar': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 63 }],
    'backgroundColor': '#fff',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 215 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'navbar-brand': {
    'display': 'inline-block',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.3125 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.3125 }],
    'marginRight': [{ 'unit': 'rem', 'value': 2 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'whiteSpace': 'nowrap'
  },
  'eo-nav-admin': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'WebkitBoxShadow': '0px 0px 14px rgba(0, 0, 0, 0.1)',
    'MozBoxShadow': '0px 0px 14px rgba(0, 0, 0, 0.1)'
  },
  'eo-nav-box li': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }]
  },
  'eo-nav-box li a': {
    'color': '#524674',
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '500'
  },
  'eo-nav-box liactive a': {
    'color': '#fc304a',
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'eo-nav-box li:hover a': {
    'color': '#fc304a',
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'eo-nav-box li a > icon-aside': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'eo-nav-admin': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'eo-nav-admin navbar-nav': {
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'eo-nav-admin form-inline': {
    'float': 'right'
  },
  'eo-content': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.36 }],
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 90 }, { 'unit': 'string', 'value': '' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '' }]
  },
  'title-theme': {
    'color': '#524674',
    'textTransform': 'uppercase',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-red': {
    'textTransform': 'capitalize',
    'backgroundColor': '#fd383f',
    'color': '#fff'
  },
  'btn-red:hover': {
    'textTransform': 'capitalize',
    'backgroundColor': '#ec3138',
    'color': '#fff'
  },
  'btn-red:focus': {
    'textTransform': 'capitalize',
    'backgroundColor': '#ec3138',
    'color': '#fff'
  },
  'btn-red:active': {
    'textTransform': 'capitalize',
    'backgroundColor': '#ec3138',
    'color': '#fff'
  },
  'cal': {
    'color': 'blue !important'
  },
  'btnsub': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'backgroundColor': 'green',
    'color': 'white'
  },
  'btsb': {
    'marginBottom': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'btn-addons': {
    'borderTopRightRadius': '2px',
    'borderBottomRightRadius': '2px'
  },
  'eo-table thead > tr > th': {
    'backgroundColor': '#dbdbdb'
  },
  'eo-table tbody > tr > td': {
    'backgroundColor': '#ffffff'
  },
  'eo-table tbody > tr > td > button': {
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'eo-table tbody > tr > td > at-text': {
    'color': '#007bff'
  },
  'badge-sm-custom': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '500'
  },
  'btn-orange': {
    'backgroundColor': '#dc9c0a',
    'borderColor': '#dc9c0a',
    'color': '#ffffff'
  },
  'btn-orange:hover': {
    'backgroundColor': '#a07207',
    'borderColor': '#a07207',
    'color': '#ffffff'
  },
  'btn-orange:focus': {
    'backgroundColor': '#a07207',
    'borderColor': '#a07207',
    'color': '#ffffff'
  },
  'btn-orange:avtive': {
    'backgroundColor': '#a07207',
    'borderColor': '#a07207',
    'color': '#ffffff'
  },
  'ddd': {
    'width': [{ 'unit': 'px', 'value': 431 }]
  },
  'inputBox': {
    'borderRadius': '3px',
    'borderStyle': 'solid',
    'borderColor': '#c7c7c7',
    'marginInlineStart': '35px'
  },
  'inputBox:focus': {
    'borderColor': 'none'
  },
  'inputBoxRef': {
    'borderRadius': '3px',
    'borderStyle': 'solid',
    'borderColor': '#c7c7c7',
    'marginInlineStart': '2px'
  },
  'inputBoxRef:focus': {
    'borderColor': 'none'
  },
  'radioButton': {
    'marginTop': [{ 'unit': 'px', 'value': 4 }],
    'marginInlineStart': '16px'
  },
  'sample': {
    'height': [{ 'unit': 'px', 'value': 47 }]
  },
  'marginTop': {
    'marginTop': [{ 'unit': 'px', 'value': 17 }]
  },
  'buttonPosition': {
    'marginInlineStart': '49%'
  },
  'styles_modal__gNwvD': {
    'maxWidth': [{ 'unit': 'px', 'value': 900 }],
    'position': 'relative',
    'padding': [{ 'unit': 'rem', 'value': 1.2 }, { 'unit': 'rem', 'value': 1.2 }, { 'unit': 'rem', 'value': 1.2 }, { 'unit': 'rem', 'value': 1.2 }],
    'background': '#ffffff',
    'backgroundClip': 'padding-box',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.25)' }],
    // margin: auto;
    'marginTop': [{ 'unit': 'px', 'value': 110 }],
    'marginLeft': [{ 'unit': 'px', 'value': 405 }],
    'height': [{ 'unit': 'px', 'value': 271 }]
  },
  'box-grid:last-child': {
    'borderBottomLeftRadius': '10px',
    'borderBottomRightRadius': '10px',
    'borderTopLeftRadius': '10px',
    'borderTopRightRadius': '10px'
  },
  'box-grid': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'background': '#fff',
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderRadius': '10px'
  },
  'box-grid:first-child': {
    'borderTopLeftRadius': '10px',
    'borderTopRightRadius': '10px',
    'borderBottomLeftRadius': '10px',
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'borderBottomRightRadius': '10px'
  },
  'modal-footer': {
    'marginTop': [{ 'unit': 'px', 'value': 14 }]
  },
  'shadow': {
    'WebkitBoxShadow': '3px 3px 5px 6px #ccc',
    // Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+
    'MozBoxShadow': '3px 3px 5px 6px #ccc',
    // Firefox 3.5 - 3.6
    'boxShadow': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': '#ccc' }],
    // Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5
  }
});

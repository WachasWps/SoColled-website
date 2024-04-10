import React from 'react'

import PropTypes from 'prop-types'

import './product-group.css'

const ProductGroup = (props) => {
  return (
    <div
      className={`product-group-product-group ${props.rootClassName} `}
    ></div>
  )
}

ProductGroup.defaultProps = {
  text13: '₹ 350',
  text16: 'TODAY',
  imageAlt3: 'image',
  text19: 'Nigdi Pradhikaran, Pune',
  rootClassName: '',
  text18: 'Books for JEE Mains, Advanced and Neet',
  text21: '₹ 350',
  imageSrc3:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  imageSrc4:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  text23: 'Nigdi Pradhikaran, Pune',
  text4: 'TODAY',
  text22: 'Books for JEE Mains, Advanced and Neet',
  text6: 'Books for JEE Mains, Advanced and Neet',
  text15: 'Nigdi Pradhikaran, Pune',
  text10: 'Books for JEE Mains, Advanced and Neet',
  imageAlt5: 'image',
  imageAlt4: 'image',
  imageAlt2: 'image',
  text20: 'TODAY',
  imageSrc2:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  text7: 'Nigdi Pradhikaran, Pune',
  text9: '₹ 350',
  text8: 'TODAY',
  imageAlt1: 'image',
  text17: '₹ 350',
  text12: 'TODAY',
  text5: '₹ 350',
  text14: 'Books for JEE Mains, Advanced and Neet',
  text11: 'Nigdi Pradhikaran, Pune',
  imageSrc1:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  imageSrc5:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
}

ProductGroup.propTypes = {
  text13: PropTypes.string,
  text16: PropTypes.string,
  imageAlt3: PropTypes.string,
  text19: PropTypes.string,
  rootClassName: PropTypes.string,
  text18: PropTypes.string,
  text21: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc4: PropTypes.string,
  text23: PropTypes.string,
  text4: PropTypes.string,
  text22: PropTypes.string,
  text6: PropTypes.string,
  text15: PropTypes.string,
  text10: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt2: PropTypes.string,
  text20: PropTypes.string,
  imageSrc2: PropTypes.string,
  text7: PropTypes.string,
  text9: PropTypes.string,
  text8: PropTypes.string,
  imageAlt1: PropTypes.string,
  text17: PropTypes.string,
  text12: PropTypes.string,
  text5: PropTypes.string,
  text14: PropTypes.string,
  text11: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc5: PropTypes.string,
}

export default ProductGroup

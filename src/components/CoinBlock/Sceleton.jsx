import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={520}
    viewBox="0 0 280 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="231" cy="162" r="3" /> 
    <circle cx="125" cy="104" r="106" /> 
    <rect x="21" y="224" rx="0" ry="0" width="212" height="43" /> 
    <rect x="21" y="285" rx="0" ry="0" width="213" height="77" /> 
    <rect x="31" y="391" rx="0" ry="0" width="71" height="34" /> 
    <rect x="128" y="387" rx="15" ry="15" width="97" height="42" />
  </ContentLoader>
)

export default MyLoader


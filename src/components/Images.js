import React from 'react';
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     width: 50,
//     height: 200,
//     resizeMode: 'fit',
//   }
// });

const Images = (props) => {
    return (
        <div>
            Images
            {props.images.map((image, index) => 
                <img key={index} src={image.download_url} ></img>) }
        </div>
    )
}

export default Images

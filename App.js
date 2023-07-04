import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, } from 'react-native';

const ProductList = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {
      id: 0,
      title: 'Xiaomi Mi True Wireless Earbuds',
      imgURL: 'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
      price: '₺134,77',
      inStock: true,
    },

    {
      id: 1, title: 'General Mobile GM 20', imgURL:
        'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg', price: '₺1.810,21', inStock: true,
    },
    {
      id: 2, title: 'Philips 58PUS8505/62 The One', imgURL:
        'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg', price: '₺6.992,25', inStock: false,
    },
    {
      id: 3, title: 'LG 49UM7100PLB Ultra HD 4K', imgURL:
        'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg', price: '₺4.614,38', inStock: true,
    },
    {
      id: 4, title: 'Samsung Galaxy M31 SM-M315F',
      imgURL:
        'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg', price: '₺2.995,80', inStock: true,
    },
    {
      id: 5, title: 'Apple AirPods Series 2', imgURL:
        'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg', price: '₺1.299,00', inStock: true,
    },
    {
      id: 6, title: 'Lenovo Tab M10 Plus',
      imgURL:
        'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg', price: '₺2.496,50', inStock: false,
    },
    {
      id: 7, title: 'Xiaomi Redmi 20000 Mah', imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg', price: '₺134,70', inStock: false,
    },
    {
      id: 8, title: 'Xiaomi Mijia Smart Home 360', imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg', price: '₺269,73', inStock: true,
    },
    {
      id: 9, title: 'Xiaomi Mi Box S 4K Ultra HD', imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg', price: '₺478,53', inStock: true,
    },
    {
      id: 10, title: 'Haylou Solar LS-5 Smartwatch', imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg', price: '₺296,00', inStock: true,
    },
  ];

  const filterData = (text) => {
    setSearchText(text);

    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const renderItem = ({ item }) => (

    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imgURL }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemStock}>{item.inStock ? 'In Stock' : 'Out of Stock'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={filterData}
      />
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'beige',  //Rengi normalde beyazdı fakat böyle daha estetik durdu.
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    paddingHorizontal: 18,
    marginBottom: 15,
    borderRadius: 10,
    marginTop: 40,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 5,    //1 di fakat  5 olunca daha güzel durdu.
    borderColor: 'orange', //Rengi normalde beyazdı fakat böyle daha estetik durdu.
    borderRadius: 10,
    padding: 8,
  },
  itemImage: {
    width: 150,  //180 di ama güzel durmuyordu.
    height: 200,  //230 du ama güzel durmuyordu.
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    marginBottom: 4,
  },
  itemStock: {
    fontSize: 14,
    color: 'gray',
  },

});

export default ProductList;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export function DataTable({data, columns}) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        {columns.map(key => {
          return (
            <View style={styles.tableRowWrapper}>
              <Text style={styles.rowTextStyle}> {key} </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.tableData}>
        {data.map(element => {
          return (
            <View style={styles.tableDataRowWrapper}>
              {columns.map(key => {
                return (
                  <View style={styles.tableDataRow}>
                    <Text style={styles.tableDataRowTextStyle}>
                      {' '}
                      {element[key]}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  tableRowWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowTextStyle: {
    color: 'black',
  },
  tableData: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  tableDataRowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 5,
  },
  tableDataRow: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableDataRowTextStyle: {
    color: 'black',
  },
});

import React from 'react';
import TableItemTitle from './TableItemTitle';
import TableItem from './TableItem';
class TableType extends React.Component {
    render() {
        const content = this.props.content;
        const keywords = this.props.key_words;
        const checked = this.props.checked;
        return (
            <div>
                <TableItemTitle titleName={content.category}></TableItemTitle>
                {
                    content.product.map(
                        (item, index) => {
                            console.log(keywords);
                            
                            if(keywords&&!item.name.startsWith(keywords)){
                                return '';
                            }

                            if(checked&&!item.stocked){
                                return '';
                            }
                            return <TableItem key={index} itemName={item.name} itemPrice={item.price} inStock={item.stocked}></TableItem>
                        }
                    )
                }
            </div>

        );
    }
}
export default TableType;
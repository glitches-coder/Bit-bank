import React from "react";
import './secondary-content.styles.scss';
import DataHandler from "../../components/content/content.component";
import  Business  from  '../../utils/business.svg';
import  Corporate from  '../../utils/corporate.svg';
import  Personal from  '../../utils/personal.svg';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [
                {
                    id: 1,
                    title: 'Fixed Deposit',
                    content: 'Keep your hard earned money safe in Fixed Deposit. A safe and stable investment option which promises attractive and assured returns. Safe custody of your fixed deposit receipts. Facility of automatic renewal and much more.',
                    image: `${Personal}`,
                },
                {
                    id: 2,
                    title: 'Business Account',
                    content: 'Most comprehensive solution specifically designed for merchants & retailers. No need to maintain minimum balance. Customised pre-approved overdraft facility.',
                    image: `${Business}`,
                },
                {
                    id: 3,
                    title: 'Corporate Account',
                    content: 'One-of the kind specialized current account customizable as per your business segment. Easy and secure payments with Corporate Internet Banking.',
                    image: `${Corporate}`,
                }

            ]
        }
    }

    render() {
        const contentIterator = this.state.content.map(({id, ...otherProps}) => (
            <DataHandler key={id} {...otherProps}></DataHandler>
        ))
        return(
            <div className='content-show'>
                {contentIterator}
            </div>

        )
    }
}
export default Content;
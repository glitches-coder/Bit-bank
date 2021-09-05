import React from 'react';
import './homepage.styles.scss'
import Card from '../components/card/card.component';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    id: 1,
                    title: "Loans",
                    content: "Avail easy loans at low interest",
                    innerItems: [
                        {
                            id: 1,
                            heading: 'How do we provide loans?',
                            content: 'Buy a home, car or bike; invest in your business; or get home the latest gadgets… Bit Bank helps you achieve a variety of goals with a wide range of loan products. Attractive interest rates, flexible tenures and repayment options, minimal documentation and quick disbursals are some of the features of Bit Bank loans.'
                        }
                    ]
                    
                },
                {
                    id: 2,
                    title: "Transfer",
                    content: "Transfer and withdraw funds easily"
                },
                {
                    id: 3,
                    title: "Investments",
                    content: "Open fixed deposit/recurring deposits."
                },
                {
                    id: 4,
                    title: "Account Info",
                    content: "Access all your banking info in one place."
                },
                {
                    id: 5,
                    title: "Other Services",
                    content: "ATM locators,cheque books all at one place."
                },
                {
                    id: 6,
                    title: "Fixed Deposit",
                    content: "Keep your hard earned money safe in Fixed Deposit. Apply now."
                },
                {
                    id: 7,
                    title: "Security",
                    content: "Peace of mind for you as we have the most advanced technology & protection."
                },

                {
                    id: 8,
                    title: "Savings",
                    content: "a zero balance digital bank account available to everyone."
                },


            ]

        };


    }
    
    render() {
        const iterator = this.state.sections.map(({id, ...otherProps}) => (
            <Card key={id} {...otherProps}></Card>
        ))
        return (
            <div className='homepage'>
                {iterator}
            </div>
        )
    }
}

export default HomePage;
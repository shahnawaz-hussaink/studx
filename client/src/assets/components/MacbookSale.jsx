import {Link} from 'react-router-dom'
export default function MacbookSale(){
    return (
        <>
            <div className="my-5 md:my-20">
                <div>
                    <Link to="/macbookpro">
                        <img src="/Macbook/macbookPro.png" alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
};

import Card from "./Card";

function Tours({tours,removeTours}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With JIKSSS...</h2>
            </div>
            <div className="cards">
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTours}></Card>
                })
            }
            </div>
        </div>
    );
}

export default Tours;
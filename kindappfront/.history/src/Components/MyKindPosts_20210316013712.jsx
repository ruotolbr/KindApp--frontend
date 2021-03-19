import React from 'react';
import OpportunityCreate from './OpportunityCreate';

function MyKindPosts(props) {
    return (
        <div>
            <OpportunityCreate>
                data={props}
            </OpportunityCreate>
        </div>
    );
}

export default MyKindPosts;
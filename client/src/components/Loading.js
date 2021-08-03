import React from 'react';

export default function Loading() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status" style={{height:'100px', width:'100px'}}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
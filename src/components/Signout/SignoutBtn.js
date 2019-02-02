import React from 'react'
import { Button } from 'semantic-ui-react'

const SignoutBtn = ({ onRouteChange }) => (
        <div>
                <Button 
                    negative
                    onClick={() => onRouteChange('signin')}
                >
                Sign out</Button>
            
        </div>
)

export default SignoutBtn
import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

const acceptedStyleProps = [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'color'
]

const BaseStyledType = styled.div`
    ${props => {
        return Object.keys(props).map(key => {
            if (!acceptedStyleProps.includes(key)) return '';
            //@ts-ignore
            return `${key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()}: ${props[key]};`
        }).join('');
    }
    }

    small {
        font-size: 70%;
    }
`;

const TypeWithContext: FC<{ type: string }> = ({ children, type, ...props }) => {
    const { typography: { styles: typography } }: any = useContext(ThemeContext);

    const {
        tag,
        ...mergedProps
    }: any = {
        ...typography[type],
        ...props,
    };

    const Type = BaseStyledType.withComponent(tag);

    return (
        <Type {...mergedProps}
        >
            {children}
        </Type>
    );
}

export const Canon: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type={'Canon'}
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const Trafalgar: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type="Trafalgar"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const Paragon: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type="Paragon"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const DoublePica: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type="DoublePica"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const GreatPrimer: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type="GreatPrimer"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const BodyCopy: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type="BodyCopy"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const Brevier: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type="Brevier"
        {...props}
    >
        {children}
    </TypeWithContext>
);



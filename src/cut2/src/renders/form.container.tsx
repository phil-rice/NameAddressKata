import React from "react";

/**
 * this interface specifies that FormContainer will always receive children prop, which is a special
 * react property that represents content that are passed between <> and </> of your component.
 *
 * So in our case, children will be everything that is passed between <FormContainer> </FormContainer>
 *
 * The fact that we specify that children are of type React.ReactNode, means that the children are going
 * to be anything that React can render.
 */
export interface FormContainerProps {
    children: React.ReactNode;
}

/**
 * implementation of a FormContainer. Since we specify that it takes as FormContainerProps in the <>, this means
 * that our FormContainer excepts to receive the properties of that interface meaning, in this case if we don't pass
 * children to our FormContainer, typescript won't allow us to compile => type enforcing
 */
export const FormContainer: React.FC<FormContainerProps> = ({children}) => {
    return <form>{children}</form>
}


/**
 * So, right now if we would have something like this:
 * <FormContainer>
 *
 * </FormContainer>   , our application won't compile. Why? => Because we specified that
 * our FormContainer must have children, since it uses the FormContainerProp as a type.
 * To make it so that we can have nothing between our FormContainer tags, we can make the
 * children prop optional : children?: React.ReactNode.
 */
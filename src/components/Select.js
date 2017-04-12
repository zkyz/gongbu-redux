import React from "react";
import PropTypes from "prop-types";
import {SelectField} from "redux-form-material-ui";
import {Field} from "redux-form";
import {pickBy} from "lodash";
import {MenuItem} from "material-ui";

class Select extends React.Component {

    constructor(props) {
        super(props)

        this.props = props
        this.options = props.options
        this.otherAttr = pickBy(props, (x, y) => y !== 'label' && y !== 'options')
    }

    render() {
        const {id, name, label, style} = this.props
        let key = 0

        new Promise(fx => setTimeout(fx, 500)).then(() => {
            this.options = [
                {value: 123, text: 'test'},
                {value: 456, text: 'check'}
            ];
        })

        return (
            <Field { ...this.otherAttr }
                   id={ id }
                   name={ name }
                   floatingLabelText={ label || id || name }
                   component={ SelectField }
                   style={ {...style, verticalAlign: 'top'} }
            >
                {
                    this.options.map(
                        option => <MenuItem key={ key++ }
                                            value={ option.value }
                                            primaryText={ option.text }

                        />
                    )
                }
            </Field>
        )
    }
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    label: PropTypes.string,
    style: PropTypes.object,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    validate: PropTypes.func,
    autoFocus: PropTypes.bool
}

export default Select

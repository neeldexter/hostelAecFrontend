function toFormData( data )
{
    let form = new FormData();
    for ( const item in data ) {
        const element = data[ item ];
        Array.isArray( element )
            ? element.forEach( ( val, index ) =>
            {
                if ( typeof val == "object" ) {
                    for ( const key in val ) {
                        const element = val[ key ];
                        form.append( `${ item }[${ index }][${ key }]`, element );
                    }
                } else {
                    form.append( `${ item }[${ index }]`, val );
                }
            } )
            : form.append( item, element );
    }
    return form;
}
export default toFormData;
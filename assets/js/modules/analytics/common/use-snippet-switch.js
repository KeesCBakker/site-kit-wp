/**
 * Analytics Use Snippet Switch component.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
	useSelect as useSelectHook,
	useDispatch as useDispatchHook,
} from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import Switch from 'GoogleComponents/switch';

const STORE_NAME = 'modules/analytics'; // temp

export default function UseSnippetSwitch( { useSelect, useDispatch } ) {
	const useSnippet = useSelect( ( select ) => select( STORE_NAME ).getUseSnippet() );

	const { setUseSnippet } = useDispatch( STORE_NAME );
	const onChange = useCallback( () => {
		setUseSnippet( ! useSnippet );
	}, [ useSnippet ] );

	return (
		<div className="googlesitekit-analytics-usesnippet">
			<Switch
				label={ __( 'Let Site Kit place code on your site', 'google-site-kit' ) }
				checked={ useSnippet }
				onClick={ onChange }
				hideLabel={ false }
			/>
			<p>
				{ useSnippet
					? __( 'Site Kit will add the code automatically', 'google-site-kit' )
					: __( 'Site Kit will not add the code to your site', 'google-site-kit' )
				}
			</p>
		</div>
	);
}

UseSnippetSwitch.propTypes = {
	useSelect: PropTypes.func,
	useDispatch: PropTypes.func,
};

UseSnippetSwitch.defaultProps = {
	useSelect: useSelectHook,
	useDispatch: useDispatchHook,
};

import React from 'react'
import List from '../common/list';
import { connect } from 'react-redux'
import { changeMulti } from '../../redux/actions/user';

const MultiSubmit = ({ list, categories }) => {
	console.log(list);
	return (
		<div className="d-flex flex-wrap">
			<List
				list={list}
				RenderItem={({ thumbnail, categories_id }) => (
					<div className="multi-select-div">
						<div className="multi-select-img mb-1">
							<img
								src={thumbnail}
								alt={""}
							/>
						</div>
						<div className="form-group">
							<select 
								value={categories_id}
								className="form-control f-14"
								onChange={({target}) => {
									changeMulti("UPDATE", { categories_id: parseInt(target.value, 10) })
								}}
							>
								<List
									RenderItem={({ name, id }) => (
										<option value={id}>
											{name}
										</option>
									)}
									title="cats-multi"
									list={[...categories.data]}
								/>
							</select>
						</div>
					</div>
				)}
				title="multi"
			/>
		</div>
	)
}


const mapStateToProps = (state) => ({
	list: state.multi_select.list
})

export default connect(mapStateToProps, {changeMulti})(MultiSubmit)
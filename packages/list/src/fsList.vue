<template>
	<div class="fsList">
		<table>
			<colgroup>
				<col v-for="head in listHeader" :key="head" />
			</colgroup>
			<thead>
				<tr>
					<th v-for="head in listHeader" :key="head">{{ head }}</th>
				</tr>
			</thead>
		</table>
		<table>
			<colgroup>
				<col v-for="head in listHeader" :key="head" />
			</colgroup>
			<tbody>
				<tr v-for="(row, index) in listData" :key="index">
					<td v-for="(cell, index) in row" :key="index">
						{{ cell }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'fsList',
	props: { listHeader: { type: Array }, listData: { type: Array } },
};
</script>

<style lang="scss" scoped></style>

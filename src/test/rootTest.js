const RootComponent = () => {
	const [value, setValue] = useState({});

	const passHandler = useCallback((val) => {
		setValue((prev) => {
			return {
				...prev,
				...val,
			};
		});
	}, []);

	const additionalHandler = useCallback(({ ...rest }) => {
		console.log("Extra Callback", rest);
	});

	return (
		<Fragment>
			{JSON.stringify(value)}

			<MiddleComponent
				TableContainerProps={{
					style: {
						backgroundColor: "#FFFBE9",
						padding: "16px",
					},
				}}
				HeadProps={{
					style: {
						color: "#9C0F48",
						textAlign: "center",
						padding: "8px 0",
					},
				}}
				BodyProps={{
					style: {
						color: "#361500",
						padding: "8px 0",
						textAlign: "center",
					},
					children: "Custom Body Component 2",
				}}
				tableContainerComponent={({ children, style, ...props }) => {
					return (
						<div
							{...props}
							style={{
								...style,
								border: "2px solid #FFF",
							}}>
							{children}
						</div>
					);
				}}
				tableComponent={({ children, ...props }) => {
					return (
						<div {...props}>
							<p
								style={{
									textAlign: "center",
								}}>
								Custom Table Component
							</p>
							{children}
						</div>
					);
				}}
				bodyComponent={({
					children = "Custom Body Component",
					passHandler,
					extraCallback,
					...rest
				}) => {
					return (
						<div {...rest}>
							{children}
							<button
								onClick={(...rest) => {
									passHandler({
										body: "Body Component",
									});
									extraCallback(rest);
								}}>
								Body Component
							</button>
						</div>
					);
				}}
				passHandler={passHandler}
				extraCallback={additionalHandler}
			/>
		</Fragment>
	);
};

const MiddleComponent = ({
	tableContainerComponent,
	tableComponent,
	headComponent,
	bodyComponent,
	components = {},
	TableContainerProps = {},
	TableProps = {},
	HeadProps = {},
	BodyProps = {},
	componentsProps = {},
	passHandler = () => {},
	extraCallback = () => {},
}) => {
	const TableContainer =
		typeof tableContainerComponent === "function"
			? tableContainerComponent
			: TableContainerComponent;
	const Table =
		typeof tableComponent === "function" ? tableComponent : TableComponent;
	const Head =
		typeof headComponent === "function" ? headComponent : HeadComponent;
	const Body =
		typeof bodyComponent === "function" ? bodyComponent : BodyComponent;

	const [value, setValue] = useState(0);

	useEffect(() => {
		passHandler({
			value,
			hello: "world",
		});
	}, [value]);

	return (
		<TableContainer {...TableContainerProps}>
			<Table {...TableProps}>
				<Head
					{...HeadProps}
					passHandler={passHandler}
					extraCallback={extraCallback}></Head>
				<Body
					{...BodyProps}
					passHandler={passHandler}
					extraCallback={extraCallback}></Body>
				<button
					onClick={() => {
						setValue(value + 1);
					}}>
					Click
				</button>
			</Table>
		</TableContainer>
	);
};

const TableContainerComponent = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

const TableComponent = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

const HeadComponent = ({
	children = "This is Head",
	passHandler,
	extraCallback,
	...props
}) => {
	return <div {...props}>{children}</div>;
};

const BodyComponent = ({ children = "This is Body", ...props }) => {
	return <div {...props}>{children}</div>;
};

export default RootComponent;

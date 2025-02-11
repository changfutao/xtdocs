# CSV操作

## 1.安装

```power
Install-Package CsvHelper
```

## 2.读

```csharp

void Main()
{
	string path = @"e:\1.csv";
	using var sr = new StreamReader(path, Encoding.Default);
	using var csv = new CsvReader(sr, CultureInfo.InvariantCulture);	
	var records = csv.GetRecords<Foo>();
	foreach(var item in records)
	{
		item.Dump();
	}
}

class Foo
{
	public int Id { get; set; }
	public string Name { get;set; }
}
```

## 3.写

- 单次写入

```csh
void Main()
{
  	var records = new List<Foo>
	{
		new Foo { Id = 3, Name = "one" },
		new Foo { Id = 4, Name = "two" },
	};
	string path =@"e:\1.csv";
	using var sw = new StreamWriter(path, true);
	using var csv = new CsvWriter(sw, CultureInfo.InstalledUICulture);
	csv.WriteRecords(records);
}

class Foo
{
	public int Id { get; set; }
	public string Name { get; set; }
}
```

- 多次写入同一个文件

```csharp
void Main()
{
	
	var records = new List<Foo>
	{
		new Foo { Id = 3, Name = "one" },
		new Foo { Id = 4, Name = "two" },
	};
	string path =@"e:\1.csv";
	bool isExist = false;
	if(File.Exists(path))
	{
		isExist = true;
	}
	using(var writer = new StreamWriter(path, true))
	using(var csv = new CsvWriter(writer, CultureInfo.InstalledUICulture))
	{
		//csv.WriteRecords(records);
		if (!isExist)
		{
			csv.WriteHeader<Foo>();
			csv.NextRecord();
		}
		foreach (var record in records)
		{
			csv.WriteRecord(record);
			csv.NextRecord();
		}
	}
}

class Foo
{
	public int Id { get; set; }
	public string Name { get; set; }
}
```


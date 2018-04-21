MIS FORMAADIS ANDMEBAASIST ANDMED TULEVAD NING MIS FORMAADIS NEID SISESTADA?
KOMMENTAAR(RIDA 6), REITING(RIDA 47), ÕPETAMINE(RIDA 88), ÕPPEJÕUD(RIDA 190), AINE(RIDA 335), KOOL(RIDA 433), OTSING(RIDA 516)(EESTI KEELES, ET OLEKS LIHTSAM CTRL+F)
ESMALT LISTI PÄRING, SIIS OBJEKTI PÄRING NING LÕPUS LISAMISE PÄRING


KOMMENTAAR

KOMMENTAARI LISTI PÄRING
localhost:8080/comments
[
    {
        "id": 1,
        "comment": "Lorem ipsum aliquet varius eleifend etiam proin, pellentesque ipsum proin hendrerit mattis conubia, libero venenatis habitasse netus venenatis.",
        "teaching": {
            "id": 14
        }
    },
    {
        "id": 2,
        "comment": "Proin feugiat nostra malesuada tempor viverra lacinia nec potenti.",
        "teaching": {
            "id": 3
        }
    }
]

ÜHE KOMMENTAARI PÄRING
localhost:8080/comments/1
{
    "id": 1,
    "comment": "Lorem ipsum aliquet varius eleifend etiam proin, pellentesque ipsum proin hendrerit mattis conubia, libero venenatis habitasse netus venenatis.",
    "teaching": {
        "id": 14
    }
}

KOMMENTAARI LISAMINE
localhost:8080/comments/add
{
	"comment": "Tere Kool",
	"teaching": {
		"id": 2
	}
}


REITING

REITINGU LISTI PÄRING
localhost:8080/ratings
[
    {
        "id": 1,
        "rating": 0,
        "teaching": {
            "id": 8
        }
    },
    {
        "id": 2,
        "rating": 0,
        "teaching": {
            "id": 12
        }
    }
]

ÜHE REITINGU PÄRING
localhost:8080/ratings/1
{
    "id": 1,
    "rating": 0,
    "teaching": {
        "id": 8
    }
}

REITINGU LISAMINE
localhost:8080/ratings/add
{
	"rating": 0,
	"teaching": {
		"id": 2
	}
}


ÕPETAMINE

ÕPETAMISE LISTI PÄRING
localhost:8080/teachings
[
	 {
        "id": 13,
        "professor": {
            "id": 4,
            "firstName": "Jaan",
            "lastName": "Ivanov"
        },
        "subject": {
            "id": 8,
            "title": "Infosüsteemide arendamine",
            "school": {
                "id": 2,
                "name": "Tartu Ülikool"
            }
        },
        "comments": [],
        "ratings": []
    },
    {
        "id": 14,
        "professor": {
            "id": 5,
            "firstName": "Kaisa",
            "lastName": "Mägi"
        },
        "subject": {
            "id": 1,
            "title": "Arvutid",
            "school": {
                "id": 1,
                "name": "Tallinna Tehnikaülikool"
            }
        },
        "comments": [
            {
                "id": 1,
                "comment": "Lorem ipsum aliquet varius eleifend etiam proin, pellentesque ipsum proin hendrerit mattis conubia, libero venenatis habitasse netus venenatis.",
                "teaching": {
                    "id": 14
                }
            }
        ],
        "ratings": [
            {
                "id": 8,
                "rating": 0,
                "teaching": {
                    "id": 14
                }
            },
            {
                "id": 11,
                "rating": 1,
                "teaching": {
                    "id": 14
                }
            }
        ]
    }
]

ÜHE ÕPETAMISE PÄRING
localhost:8080/teachings/13
{
    "id": 13,
    "professor": {
        "id": 4,
        "firstName": "Jaan",
        "lastName": "Ivanov"
    },
    "subject": {
        "id": 8,
        "title": "Infosüsteemide arendamine",
        "school": {
            "id": 2,
            "name": "Tartu Ülikool"
        }
    },
    "comments": [],
    "ratings": []
}

ÕPETAMISE LISAMINE (IGA KORD LISAB UUE AINE, OLEMASOLEVAGA EI SAA SIDUDA; ON VALIDA KAS NII, VÕI UUE AINE LISAMINE VIIA ERALDI KOHTA NING KOODI NATUKE ÜMBER KIRJUTADES VALIDA LISTIST OLEMASOLEV AINE)
localhost:8080/teachings/add
{
	"professor": {
		"id": 1
	},
	"subject": {
		"title": "Proov",
		"school": {
			"id": 1
		}
	}
}


ÕPPEJÕUD

ÕPPEJÕUDUDE LISTI PÄRING
localhost:8080/profs
[
	{
        "id": 7,
        "firstName": "Sergei",
        "lastName": "Smirnov",
        "teachings": [
            {
                "id": 19,
                "subject": {
                    "id": 1,
                    "title": "Arvutid",
                    "school": {
                        "id": 1,
                        "name": "Tallinna Tehnikaülikool"
                    }
                },
                "comments": [],
                "ratings": [
                    {
                        "id": 19,
                        "rating": 1,
                        "teaching": {
                            "id": 19
                        }
                    },
                    {
                        "id": 30,
                        "rating": 1,
                        "teaching": {
                            "id": 19
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "firstName": "Katrin",
        "lastName": "Valk",
        "teachings": [
            {
                "id": 20,
                "subject": {
                    "id": 4,
                    "title": "Matemaatiline analüüs",
                    "school": {
                        "id": 1,
                        "name": "Tallinna Tehnikaülikool"
                    }
                },
                "comments": [
                    {
                        "id": 9,
                        "comment": "Porttitor condimentum facilisis eu non sodales.",
                        "teaching": {
                            "id": 20
                        }
                    }
                ],
                "ratings": [
                    {
                        "id": 50,
                        "rating": 1,
                        "teaching": {
                            "id": 20
                        }
                    }
                ]
            },
            {
                "id": 21,
                "subject": {
                    "id": 6,
                    "title": "Matemaatiline analüüs",
                    "school": {
                        "id": 2,
                        "name": "Tartu Ülikool"
                    }
                },
                "comments": [
                    {
                        "id": 14,
                        "comment": "Morbi vehicula in.",
                        "teaching": {
                            "id": 21
                        }
                    }
                ],
                "ratings": []
            }
        ]
    }
]

ÜHE ÕPPEJÕU PÄRING
localhost:8080/profs/7
{
    "id": 7,
    "firstName": "Sergei",
    "lastName": "Smirnov",
    "teachings": [
        {
            "id": 19,
            "subject": {
                "id": 1,
                "title": "Arvutid",
                "school": {
                    "id": 1,
                    "name": "Tallinna Tehnikaülikool"
                }
            },
            "comments": [],
            "ratings": [
                {
                    "id": 19,
                    "rating": 1,
                    "teaching": {
                        "id": 19
                    }
                },
                {
                    "id": 30,
                    "rating": 1,
                    "teaching": {
                        "id": 19
                    }
                }
            ]
        }
    ]
}

ÕPPEJÕU LISAMINE
localhost:8080/profs/add
{
	"firstName": "Eesnimi",
	"lastName": "Perenimi"
}


AINE

AINETE LISTI PÄRING
localhost:8080/subjects
[
	{
        "id": 4,
        "title": "Matemaatiline analüüs",
        "school": {
            "id": 1,
            "name": "Tallinna Tehnikaülikool"
        },
        "teachings": [
            {
                "id": 3,
                "professor": {
                    "id": 1,
                    "firstName": "Mihkel",
                    "lastName": "Tamm"
                }
            },
            {
                "id": 20,
                "professor": {
                    "id": 8,
                    "firstName": "Katrin",
                    "lastName": "Valk"
                }
            }
        ]
    },
    {
        "id": 5,
        "title": "Lineaaralgebra",
        "school": {
            "id": 1,
            "name": "Tallinna Tehnikaülikool"
        },
        "teachings": [
            {
                "id": 11,
                "professor": {
                    "id": 4,
                    "firstName": "Jaan",
                    "lastName": "Ivanov"
                }
            },
            {
                "id": 16,
                "professor": {
                    "id": 6,
                    "firstName": "Magnus",
                    "lastName": "Mõttus"
                }
            }
        ]
    }
]

ÜHE AINE PÄRING
localhost:8080/subjects/4
{
    "id": 4,
    "title": "Matemaatiline analüüs",
    "school": {
        "id": 1,
        "name": "Tallinna Tehnikaülikool"
    },
    "teachings": [
        {
            "id": 3,
            "professor": {
                "id": 1,
                "firstName": "Mihkel",
                "lastName": "Tamm"
            }
        },
        {
            "id": 20,
            "professor": {
                "id": 8,
                "firstName": "Katrin",
                "lastName": "Valk"
            }
        }
    ]
}

AINE LISAMISE PÄRING
localhost:8080/subjects/add
{
	"title": "Aine nimi",
	"school": {
		"id": 1
	}
}


KOOL

KOOLI LISTI PÄRING
localhost:8080/schools
[
	{
        "id": 2,
        "name": "Tartu Ülikool",
        "subjects": [
            {
                "id": 6,
                "title": "Matemaatiline analüüs"
            },
            {
                "id": 7,
                "title": "Lineaaralgebra"
            },
            {
                "id": 8,
                "title": "Infosüsteemide arendamine"
            },
            {
                "id": 18,
                "title": "Diskreetne matemaatika"
            },
            {
                "id": 23,
                "title": "Diskreetne matemaatika"
            }
        ]
    },
    {
        "id": 3,
        "name": "Tallinna Ülikool",
        "subjects": [
            {
                "id": 9,
                "title": "Arvutid"
            },
            {
                "id": 10,
                "title": "Infosüsteemide arendamine"
            }
        ]
    }
]

ÜHE KOOLI PÄRING
localhost:8080/schools/2
{
    "id": 2,
    "name": "Tartu Ülikool",
    "subjects": [
        {
            "id": 6,
            "title": "Matemaatiline analüüs"
        },
        {
            "id": 7,
            "title": "Lineaaralgebra"
        },
        {
            "id": 8,
            "title": "Infosüsteemide arendamine"
        },
        {
            "id": 18,
            "title": "Diskreetne matemaatika"
        },
        {
            "id": 23,
            "title": "Diskreetne matemaatika"
        }
    ]
}

KOOLI LISAMISE PÄRING
localhost:8080/schools/add
{
	"name": "kooli nimi"
}


OTSING (AINULT PROFESSORI PERENIME JÄRGI)
localhost:8080/profs/search/Valk
[
    {
        "id": 8,
        "firstName": "Katrin",
        "lastName": "Valk",
        "teachings": [
            {
                "id": 20,
                "subject": {
                    "id": 4,
                    "title": "Matemaatiline analüüs",
                    "school": {
                        "id": 1,
                        "name": "Tallinna Tehnikaülikool"
                    }
                },
                "comments": [
                    {
                        "id": 9,
                        "comment": "Porttitor condimentum facilisis eu non sodales.",
                        "teaching": {
                            "id": 20
                        }
                    }
                ],
                "ratings": [
                    {
                        "id": 50,
                        "rating": 1,
                        "teaching": {
                            "id": 20
                        }
                    }
                ]
            },
            {
                "id": 21,
                "subject": {
                    "id": 6,
                    "title": "Matemaatiline analüüs",
                    "school": {
                        "id": 2,
                        "name": "Tartu Ülikool"
                    }
                },
                "comments": [
                    {
                        "id": 14,
                        "comment": "Morbi vehicula in.",
                        "teaching": {
                            "id": 21
                        }
                    }
                ],
                "ratings": []
            }
        ]
    }
]
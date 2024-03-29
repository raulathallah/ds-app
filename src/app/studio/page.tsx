"use client";
import CardStudios from "@/components/CardStudios";
import ChipCustom from "@/components/Chip";
import TextCustom from "@/components/Text";
import { getCity } from "@/redux/slices/location-slice";
import {
  getFavoriteStudio,
  getStudioDetail,
  getStudios,
} from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { Studio, User } from "@/type";
import {
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Divider,
  Input,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import user from "../_lib/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  return;
}

const StudioList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: studioList, favorite } = useSelector(
    (state: RootState) => state.studios
  );
  const { data: cityList } = useSelector((state: RootState) => state.location);
  const userData: User = user();
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState<string[]>([]);
  const [studioFiltered, setStudioFiltered] = useState<Studio[]>([]);
  useEffect(() => {
    dispatch(getStudios());
    dispatch(getCity());
    if (userData) dispatch(getFavoriteStudio(userData.id));
  }, []);

  useEffect(() => {
    if (filterCity.length > 0 && search) {
      let sf = studioList.filter((sl) => filterCity.includes(sl.cityId));
      if (search) {
        let sfs = sf.filter((sfs) =>
          sfs.name.toLowerCase().includes(search.toLowerCase())
        );
        setStudioFiltered(sfs);
      } else {
        setStudioFiltered(sf);
      }
    } else if (filterCity.length > 0) {
      let sf = studioList.filter((sl) => filterCity.includes(sl.cityId));
      setStudioFiltered(sf);
    } else if (search) {
      let sf = studioList.filter((sl) =>
        sl.name.toLowerCase().includes(search.toLowerCase())
      );
      setStudioFiltered(sf);
    } else {
      setStudioFiltered(studioList);
    }
  }, [filterCity, studioList, search]);

  return (
    <div className="flex gap-8 ">
      <div className="w-[25%]">
        <Card className="p-4">
          <CardBody>
            <div className="flex flex-col justify-between gap-2">
              <TextCustom text="Filter" type="label-md" />
              <Input
                placeholder="Search studio..."
                size="sm"
                isClearable
                onClear={() => setSearch("")}
                value={search}
                onValueChange={setSearch}
                startContent={<FontAwesomeIcon icon={faSearch} />}
              />
            </div>
          </CardBody>
          <Divider />

          <CardBody>
            <CheckboxGroup
              label={<TextCustom text="City" type="label-sm" />}
              defaultValue={filterCity}
              onChange={(city) => setFilterCity(city as string[])}
            >
              {cityList.map((city) => (
                <Checkbox key={city.cityId} value={city.cityId}>
                  {city.cityName}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-2 w-full">
        <Tabs>
          <Tab key="all" title="All">
            {studioFiltered.map((v, i) => {
              const isFavorite = () => {
                if (favorite.find((f) => f.studioId === v.id)) {
                  return true;
                } else {
                  return false;
                }
              };
              return (
                <CardStudios
                  key={v.id}
                  studio={v}
                  favorite={userData ? isFavorite() : null}
                />
              );
            })}
          </Tab>
          {userData && (
            <Tab key="favorite" title="My Favorite">
              {studioFiltered.length > 0 ? (
                studioFiltered.map((v, i) => {
                  const isFavorite = () => {
                    if (favorite.find((f) => f.studioId === v.id)) {
                      return true;
                    } else {
                      return false;
                    }
                  };

                  if (isFavorite()) {
                    return (
                      <CardStudios
                        studio={v}
                        key={v.id}
                        favorite={userData ? isFavorite() : null}
                      />
                    );
                  }
                })
              ) : (
                <div className="text-center">
                  <ChipCustom
                    text="No Studio"
                    variant="flat"
                    color="warning"
                    size="lg"
                  />
                </div>
              )}
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default StudioList;

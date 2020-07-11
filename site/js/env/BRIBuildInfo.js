'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-11 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1591';
    this._commitGIT = '80b53d0ee9826abeaa1316ba01209b8b52ee677e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
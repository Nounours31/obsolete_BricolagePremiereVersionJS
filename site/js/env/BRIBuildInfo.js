'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-31 20:00:19';
    this._versionBuild = 'jenkins-Bricolage-210';
    this._commitGIT = '3609d8f5c92ba6ec302f4810ac8e0456230a4a69';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-25 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2141';
    this._commitGIT = 'ffcdf79f620771d21568ae80ce6c61e8c271f68c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
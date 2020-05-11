'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-11 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1348';
    this._commitGIT = '69fd8a084c96d0ff26154adece31f448db6dbe97';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
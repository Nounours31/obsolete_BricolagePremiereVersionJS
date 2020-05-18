'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-18 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1375';
    this._commitGIT = '3992e59a08019dcbc6e658dee877ada208d0764a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
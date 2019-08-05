'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-05 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-230';
    this._commitGIT = '5b8421afdf7ff6a8f8ecd9514589686f5959e579';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
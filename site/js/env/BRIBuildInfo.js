'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-17 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1615';
    this._commitGIT = 'b371bd65d135d2c60e9ee427ca2203f301894dc2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
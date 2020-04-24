'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-24 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1279';
    this._commitGIT = '58497c822a8fae5192267a53b244545b33b2262b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
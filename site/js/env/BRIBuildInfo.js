'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1151';
    this._commitGIT = '487422eeb2003ba2a971701f50281361123d093e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
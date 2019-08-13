'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-13 20:00:16';
    this._versionBuild = 'jenkins-Bricolage-262';
    this._commitGIT = 'beba51ce1a49248419f71977d1f65c095dccd36e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
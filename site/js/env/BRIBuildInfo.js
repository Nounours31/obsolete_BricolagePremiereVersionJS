'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-27 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-685';
    this._commitGIT = '45c5b11feb6bec3b7fb9a176120508afe1cfcb7c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
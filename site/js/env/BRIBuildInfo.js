'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-10 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1346';
    this._commitGIT = 'ba9bad8991be5c4043ce3d86aec490394850703b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
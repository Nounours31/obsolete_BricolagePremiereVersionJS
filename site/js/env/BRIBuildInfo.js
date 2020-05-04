'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-04 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1319';
    this._commitGIT = 'ba9ed233738c70025f73da92a98917b2f062dcfd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
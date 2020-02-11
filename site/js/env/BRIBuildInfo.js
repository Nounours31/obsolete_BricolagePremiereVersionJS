'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-11 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-987';
    this._commitGIT = 'd752be341b10b29ca20633c378a5d8e9bc03f70a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
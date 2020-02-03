'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-03 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-958';
    this._commitGIT = '4dfcfdf770966a69b5fdd0ece587a62f10c27937';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
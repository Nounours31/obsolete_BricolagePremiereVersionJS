'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-01 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-335';
    this._commitGIT = 'ac2a957924d169569e91a6617afea5631e13d293';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
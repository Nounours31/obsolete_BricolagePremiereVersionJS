'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1038';
    this._commitGIT = '8e1fde20c4b17bafffe17c0ec2fab7c23854996f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
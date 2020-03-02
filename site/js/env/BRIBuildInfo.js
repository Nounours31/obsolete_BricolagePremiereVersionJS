'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-02 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1070';
    this._commitGIT = '382259723da3020e692b3cae0ae4ee5ddcabe19e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}